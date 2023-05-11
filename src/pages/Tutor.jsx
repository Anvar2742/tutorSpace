import TextEditor from "../components/TextEditor";

function Tutor() {
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
                        Tutor Name
                    </a>
                </div>
            </header>
            <div className="h-[calc(100vh-80px)] bg-slate-200">
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-center flex-col">
                    <h1 className="font-bold text-5xl mb-8">
                        Let's prepare some lessons!
                    </h1>
                    <TextEditor />
                </div>
            </div>
        </>
    );
}

export default Tutor;
