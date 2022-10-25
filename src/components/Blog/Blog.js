import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-5 mb-5 bg-light'>
            <div className='card p-2 border-success'>
                <h2 className='text-primary'>What is cors?</h2>
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others.</p>
            </div>
            <div className='card p-2 border-success mt-3 mb-3'>
                <h3 className='text-primary'>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>Using Firebase is a good option because Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.</p>
                <p>Some other alternatives for authentication are:</p>
                <ul>
                    <li>STYTCH</li>
                    <li>Ory</li>
                    <li>Supabase</li>
                    <li>Okta</li>
                    <li>PingIdentity</li>
                    <li>Keycloak</li>
                    <li>Frontegg</li>
                    <li>Authress</li>
                </ul>
            </div>
            <div className='card p-2 border-success mt-3 mb-3'>
                <h2 className='text-primary'>How does the private route work?</h2>
                <p>The private route is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>
            <div className='card p-2 border-success mt-3 mb-3'>
                <h2 className='text-primary'>What is Node? How does Node work?</h2>
                <p>Node is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.</p>
                <p>It runs a single-threaded event loop registered with the system to handle connections, and each new connection causes a JavaScript callback function to fire.</p>
            </div>
        </div>
    );
};

export default Blog;