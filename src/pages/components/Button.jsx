export default function Button({text, onClick, buttonRef}){
    return (
        <div ref={buttonRef} onClick={onClick} className="border bg-blue-600 hover:bg-blue-400 text-white cursor-pointer flex justify-center items-center rounded-full w-28 h-12 md:text-lg">
            {text}
        </div>
    )
}