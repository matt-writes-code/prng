# how flux works

```
Title: How Flux Works

participant user
participant actionCreator
participant dispatcher
participant store
participant viewController
participant view

Note over viewController, view: these two things are one unit called view

Note left of actionCreator: SETUP (happens only once):
actionCreator --> view: <separation line>

store -> dispatcher: 'I want to be notified whenever an action comes in'
viewController -> store: ask for latest state
store -> viewController: give latest state (initial state)
viewController -> view: pass state for rendering
Note over view: render state
viewController -> store: 'I want to be notified when state changes'

view --> actionCreator: <separation line>


Note left of actionCreator: DATA FLOW (ready to accept user input):
actionCreator --> view: <separation line>

user --> view: trigger an action (user makes a change/request)
view -> actionCreator:  "please prepare an action"
Note over actionCreator: format request\ninto action
actionCreator -> dispatcher: send formatted action
dispatcher -> store: send action to list of stores in sequence
Note over store: each store gets notified of all actions
Note over store: decide whether or not to change state based on\nwhat it cares about (with switch statements)
Note over store: change state accordingly
store -> viewController: to subscribed viewControllers: 'I have changed the state!'
viewController -> store: 'Give me the updated state'
store -> viewController: send updated state
Note over viewController: turn updated state into html
viewController -> view: send updated html
Note over view: show updated html
Note left of actionCreator: (ready to accept user input again)

view --> actionCreator: <separation line>

```