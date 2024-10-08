<html>
<head>
    <title>Blackbox AI</title>
    <script src="https://unpkg.com/react/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
</head>
<body class="bg-gray-50">
    <div id="root"></div>
    <script type="text/babel">
        const App = () => {
            return (
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <header className="w-full flex items-center justify-between p-4 bg-white shadow">
                        <div className="flex items-center">
                            <button className="text-2xl">
                                <i className="fas fa-bars"></i>
                            </button>
                            <h1 className="ml-4 text-xl font-bold">BLACKBOX.AI</h1>
                            <i className="fas fa-chevron-down ml-2"></i>
                        </div>
                        <div className="flex space-x-4">
                            <button className="bg-white border border-gray-300 rounded px-4 py-2">+ New Chat</button>
                            <button className="bg-white border border-gray-300 rounded px-4 py-2">
                                <i className="fas fa-image"></i> Image Generation
                            </button>
                            <button className="bg-white border border-gray-300 rounded px-4 py-2">
                                <i className="fas fa-image"></i> Image To App
                            </button>
                            <button className="bg-white border border-gray-300 rounded px-4 py-2">Create Agent</button>
                            <button className="bg-black text-white rounded px-4 py-2 flex items-center">
                                <i className="fas fa-code"></i> Vscode Extension
                            </button>
                            <button className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center">F</button>
                            <button className="text-2xl">
                                <i className="fas fa-phone"></i>
                            </button>
                        </div>
                    </header>
                    <main className="flex flex-col items-center justify-center flex-grow">
                        <h2 className="text-3xl font-bold">Ask Blackbox AI Anything</h2>
                        <p className="text-gray-500 mt-2">
                            <i className="fas fa-shield-alt"></i> Trusted by Millions of Users & Fortune 500 Companies
                        </p>
                    </main>
                    <footer className="w-full flex items-center justify-center p-4 bg-white shadow">
                        <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-full px-4 py-2 w-full max-w-md">
                            <i className="fas fa-at"></i>
                            <i className="fas fa-code"></i>
                            <i className="fas fa-paperclip"></i>
                            <span className="text-red-500">●</span>
                            <input type="text" placeholder="Message Blackbox..." className="flex-grow outline-none" />
                            <button className="text-2xl">
                                <i className="fas fa-arrow-up"></i>
                            </button>
                        </div>
                    </footer>
                </div>
            );
        };

        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>