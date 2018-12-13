# virtual environments python virtualenv
||| additional reference

	pip3 install pipenv
then just use pipenv while you’re in the right directory instead of pip3 to install dependencies


## MacOS + brew (python framework build)
- https://github.com/pypa/pipenv/issues/538
- Not working for me on MacOs + Brew-installed python3. However, the error went away after setting the locale so I assume this may have something to do with https://bugs.python.org/issue18378.

## TYPE THESE INTO TERMINAL BEFORE INSTALLING PIPENV
	export LANG=en_US.UTF-8
	export LC_ALL=en_US.UTF-8

## installing pipenv
	sudo pip3 install pipenv

## running pipenv
	cd path/to/project
	pipenv install
- it will then tell you to pipenv shell to start the virtualenv