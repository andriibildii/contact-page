import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/ContactPage/ContactPage";

// Create a client
const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                {/* After developing the rest of the pages, must be specified the Route which will indicate the path to the new page */}
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    {/* <Route path="features" element={<Features />} /> */}
                    {/* <Route path="blog" element={<Blog />} /> */}
                    {/* <Route path="shop" element={<Shop />} /> */}
                    {/* <Route path="about" element={<About />} /> */}
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </QueryClientProvider>
    );
}

export default App;
