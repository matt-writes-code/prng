# SERVERLESS

### serverless deployment + notes for microservices/monolith apps
- workflow for deploying kubernetes for dev and production

## why?
- deploy a definition as an API!!!!!!
- the world is moving toward smaller and smaller units of computing
```
the recent explosion in popularity of container technology (Docker in particular) and in orchestration technology (such as Kubernetes, Mesos, Consul and so on) this pattern has become much more viable to implement from a technical standpoint.
```

## things to know
- `kubectl` is like git cli, you run kubernetes commands through it [docs](https://kubernetes.io/docs/reference/kubectl/overview/)
- `helm` (and `tiller`) is like git's aliases (and more), you can chain `kubectl` commands
- `minikube` is a local dev server equivalent in kubernetes
GKE is Google Kubernetes Engine, for production, run through `gcloud` cli
- `kubeless` is a serverless framework for kubernetes

## overview (FaaS) (Functions as a Service)
serverless computing == containerized computing == smaller units == faster, space saving
To get started with serverless computing, you only need three ingredients:
- A Kubernetes cluster (place to host your serverless server LOL) (a container, because it is kubernetes)
- Kubeless (used to deploy your code to the cluster)
- Some code

## 2.1 have cluster (with options)
- [tutorial](https://docs.bitnami.com/kubernetes/get-started-kubernetes/)

1. locally (test and dev)
- [minikube](https://github.com/kubernetes/minikube) [alt ref](https://medium.com/@claudiopro/getting-started-with-kubernetes-via-minikube-ada8c7a29620) [alt tut](https://blog.cloudboost.io/kubeless-is-more-9f20fb443b5a)
	- **needs a VM** ([e.g. Virtual Box](https://www.virtualbox.org/wiki/Downloads))
	1. `minikube start` *if error, might be trouble with your VM*
		- **needs kubectl** ([here](https://docs.bitnami.com/kubernetes/get-started-kubernetes/#step-3-install-the-kubectl-command-line-tool))
		- **do not double click and interact with the VM through VirtualBox GUI**, as once you close the Virtual window, you stop the server.
	2. `kubectl cluster-info` *to see where your server is*
		- `kubectl get nodes` *to see all your containers in the cluster (running apps on your virtual OS)*
		- `kubectl describe node` to see details
	3. install something and run it
		1. (app/microservices) install something with Helm
			- **needs Helm and Tiller** (like gulp for kubernetes, helm->client, tiller->server)
				- install with `brew install kubernetes-helm`
			- deploy your app onto your kubernetes cluster (example with **MongoDB**)
				- `helm install stable/mongodb` *to install locally with no connection to the outside world*
				- `helm install stable/mongodb --set serviceType=NodePort`
				- once it is installed, a **VERY IMPORTANT** set of instructions will be returned. (refer to code block below)
				- `kubectl proxy` to start hosting to the outside world
				- open `localhost:8001` and see endpoints
				- ***you can now use your MongoDB on Kubernetes!!***
				- (extra) what is happening on my kubernetes cluster!?
					- `minikube dashboard` to see dashboard [docs](https://github.com/kubernetes/minikube)
		2. (serverless) install [kubeless](https://kubeless.io/docs/quick-start/)
			- **needs kubeless** (AWS Lambda-like plugin for kubernetes)
				- install with [download](https://github.com/kubeless/kubeless/releases) or [cli](https://kubeless.io/docs/quick-start/#linux-and-macos)
				- *shitty bits (bash commands)*
					1. define bash var `RELEASE`
						- `export RELEASE=$(curl -s https://api.github.com/repos/kubeless/kubeless/releases/latest | grep tag_name | cut -d '"' -f 4)`
					2. create namespace on your kubernetes cluster for kubeless to run things on
						- `kubectl create ns kubeless`
					3. install kubeless on your kubernetes (pick the right install)
						- `kubectl create -f https://github.com/kubeless/kubeless/releases/download/$RELEASE/` + yaml_option
						- options:
							1. `kubeless-$RELEASE.yaml` is used for RBAC Kubernetes cluster. (minikube - if you get stuff with `kubectl clusterroles` then it's RBAC)
							2. `kubeless-non-rbac-$RELEASE.yaml` is used for non-RBAC Kubernetes cluster.
							3. `kubeless-openshift-$RELEASE.yaml` is used to deploy Kubeless to OpenShift (1.5+).
					4. TLDR
						- `export RELEASE=$(curl -s https://api.github.com/repos/kubeless/kubeless/releases/latest | grep tag_name | cut -d '"' -f 4)`
						- `kubectl create ns kubeless`
						- `kubectl create -f https://github.com/kubeless/kubeless/releases/download/$RELEASE/kubeless-$RELEASE.yaml`  // for kubernetes cluster on GKE
					4. check to see if it works
						- `kubectl get pods -n kubeless`
						- `kubectl get deployment -n kubeless`
						- `kubectl get customresourcedefinition`
			- deploy a kubeless `function` on your kubernetes cluster ([how](https://kubeless.io/docs/quick-start/#sample-function))
				- write that function
					```python
					# your function
					def hello(event, context):
					print event
					return event['data']
					```
				- deploy with kubeless cli
					- `kubeless function deploy function-name --runtime python2.7 --from-file test.py --handler test.hello`
					- erm function name cannot use underscores
				- check
					- from cli `kubeless function call function-name --data 'hello world finally!!'`
			- use `kubeless ui` the equivalent of postman for kubeless
				- from cli
					- install with `kubectl create -f https://raw.githubusercontent.com/kubeless/kubeless-ui/master/k8s.yaml`
					- [to be continued](https://blog.cloudboost.io/kubeless-is-more-9f20fb443b5a/#e19c)
					- might not work when you set
				- from [github repo](https://github.com/kubeless/kubeless-ui)
					- clone github repo
					- follow instructions and `yarn run dev` to start
			- link the `function` (essentially an app now) to a http endpoint (one of the ways) [docs](https://kubeless.io/docs/http-triggers/)
				- **needs kubernetes ingress enabled** [docs](https://kubeless.io/docs/http-triggers/)
					- 'install/enable' with `minikube addons enable ingress` - enables default ingress (Nginx Ingress controller)
					- check
						- `kubectl get pod -n kube-system -l app=nginx-ingress-controller` (might need to wait a while)
				- `kubectl get pods` to see if your function is up and running
				- `kubectl get svc` to get all services in your kubernetes cluster
				- `kubeless trigger http list` to check for existing http triggers
				- [create a trigger (link to the function)](https://kubeless.io/docs/http-triggers/#expose-a-function)
					- `kubeless trigger http create test-endpoint --function-name function-name` where `test-endpoint` is the endpoint name and `function-name` is the kubeless function that is deployed
				- check
					- `kubectl get ing` shows you where it is hosted
						- for this example it is hosted on `function-name.192.168.99.100.nip.io`
				- access endpoint
					- curl: `curl --data 'hello world super freaking finally!' --header "Host: test-endpoint.192.168.99.100.nip.io" --header "Content-Type:text/html" 192.168.99.100/echo` **(didn't work for me)** ***TODO to be continued later***
					curl --data 'hello world super freaking finally!' --header "Host: test-endpoint.192.168.99.100.nip.io" --header "Content-Type:text/html http://192.168.99.100:31106/
					- kubeless ui
						- `kubectl proxy` to start opening a localhost connection between the minikube cluster and the pc
						- run the `kubeless ui` app (i only used the github clone -> `yarn install` -> `yarn dev`)
					

			
			- connect to the world with `kubectl proxy` [docs](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#proxy)




	4. `kubectl proxy` to start hosting to the outside world
	5. open `localhost:8001` and see endpoints


	6. `minikube dashboard` to see dashboard [docs](https://github.com/kubernetes/minikube)

```bash
MBP17079:~ li_qun_tang$ helm install stable/mongodb
NAME:   sullen-mole
LAST DEPLOYED: Wed May 16 20:22:32 2018
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/Secret
NAME                 TYPE    DATA  AGE
sullen-mole-mongodb  Opaque  1     0s

==> v1/PersistentVolumeClaim
NAME                 STATUS  VOLUME                                    CAPACITY  ACCESS MODES  STORAGECLASS  AGE
sullen-mole-mongodb  Bound   pvc-6d259685-58fb-11e8-a566-080027cecb76  8Gi       RWO           standard      0s

==> v1/Service
NAME                 TYPE       CLUSTER-IP    EXTERNAL-IP  PORT(S)    AGE
sullen-mole-mongodb  ClusterIP  10.101.7.183  <none>       27017/TCP  0s

==> v1beta1/Deployment
NAME                 DESIRED  CURRENT  UP-TO-DATE  AVAILABLE  AGE
sullen-mole-mongodb  1        1        1           0          0s

==> v1/Pod(related)
NAME                                  READY  STATUS             RESTARTS  AGE
sullen-mole-mongodb-74f8b689f9-5k2pt  0/1    ContainerCreating  0         0s


NOTES:


** Please be patient while the chart is being deployed **

MongoDB can be accessed via port 27017 on the following DNS name from within your cluster:

    sullen-mole-mongodb.default.svc.cluster.local

To get the root password run:

    export MONGODB_ROOT_PASSWORD=$(kubectl get secret --namespace default sullen-mole-mongodb -o jsonpath="{.data.mongodb-root-password}" | base64 --decode)

To connect to your database run the following command:

    kubectl run sullen-mole-mongodb-client --rm --tty -i --image bitnami/mongodb --command -- mongo --host sullen-mole-mongodb -p $MONGODB_ROOT_PASSWORD

To connect to your database from outside the cluster execute the following commands:

    export POD_NAME=$(kubectl get pods --namespace default -l "app=mongodb" -o jsonpath="{.items[0].metadata.name}")
    kubectl port-forward --namespace default $POD_NAME 27017:27017 &
    mongo --host 127.0.0.1 -p $MONGODB_ROOT_PASSWORD
```


2. on google kubernetes engine (GKE) (production)
- [GKE](https://cloud.google.com/kubernetes-engine/)

3. on packet cloud (production)
- [deploying tutorial](https://medium.com/bitnami-perspectives/kubeless-on-packet-cloud-9e5605b8bb97)
- [packet](https://www.packet.net/)

## 2.2 write code

