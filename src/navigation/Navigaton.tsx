import { Routes, Route} from "react-router-dom";
import Home from '../pages/Home';

export default function Navigation() {

    return (
        <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    )
} 