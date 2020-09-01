import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LessonRating from './components/lesson_rating/lesson_rating.component'

const App = () => (
  <>
  <Router>
    <Switch>
      <Route path="/" component={LessonRating} />
    </Switch>
  </Router>
  </>
)

export default App;
