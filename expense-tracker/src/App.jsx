import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './layer/home/Home';
import ExpenseTrackerPage from './layer/expense_tracker_page/ExpenseTrackerPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/expense_tracker' element={<ExpenseTrackerPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
