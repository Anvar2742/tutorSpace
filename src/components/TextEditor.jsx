function TextEditor() {
    return (
        <>
            <header className="bg-slate-400 h-20">
                <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
                    <a href="#" className="text-black text-2xl font-bold">
                        tutorSpace
                    </a>
                    <a
                        href="#"
                        className="font-bold text-white bg-slate-800 h-10 flex items-center justify-center px-6 rounded-xl transition-colors hover:bg-slate-600"
                    >
                        Log in
                    </a>
                </div>
            </header>
            <div className="h-[calc(100vh-80px)] bg-slate-200">
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-center flex-col">
                    <h1 className="font-bold text-5xl mb-8">
                        Welcome to TutorSpace
                    </h1>
                    <p className="sm text-4xl">I am a...</p>
                    <div className="max-w-xs w-full flex justify-between mt-5">
                        <a
                            href="#"
                            className="font-bold text-white bg-slate-600 h-10 flex items-center justify-center px-6 rounded-xl transition-colors hover:bg-slate-800"
                        >
                            Tutor
                        </a>
                        <a
                            href="#"
                            className="font-bold text-white bg-slate-600 h-10 flex items-center justify-center px-6 rounded-xl transition-colors hover:bg-slate-800"
                        >
                            Student
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TextEditor;
