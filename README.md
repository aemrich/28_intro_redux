## Post-lecture Challenges

1. Add buttons to our Counter component to decrement the count and reset the count (Decrement should subtract by 1, reset should set the count to zero.)
  + To do this, you should dispatch a different action whenever the button is clicked.

2. Create a new component to represent a note list. This component should render out a list of notes from the noteStore.

3. Add an form with an input for note. When the form is submitted, we should add that note into the state and re-render our NoteList component.




## NOTES

1. What is Redux?
  + A predictable state container for JS apps
  + Gives us a single source of truth for our application state
  + Gives us predictable state-tree - the state is immutable
2. Why does Redux exist?
  + Keeping track of application state is really hard
  + In React, components have to pass props down many levels
3. What are the principles of Redux?
  + State changes should be predictable - the state should not be mutated
  + We will update our state using pure functions
    + non destructive, returns the same thing every time
4. What are the different pieces / components of Redux?
  + store
    + plain old javascript object
    + keeps track of the current state
    + we can give this to different components to let them have access to the data
    + will have methods to update the state and then fire off any other functions that we want
  + reducers
    + a pure function takes in an action and the current state and returns the new state
  + actions
    + something that describes that a state change should occur
    + in Redux, we represent these as plain old javascript objects
    + each one has a type: `{type: 'INCREMENT_COUNT'}`
