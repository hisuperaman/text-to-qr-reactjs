export default function InputField({ label, placeholder, value, onInputChange, onInputKeyDown }) {
    return (
        <div className="">
            <label className="">
                <div className="text-sm text-gray-600">
                    {label}
                </div>

                <div className="w-full min-w-[200px] h-10 border-0">
                    <input onKeyDown={onInputKeyDown} className="focus:outline-none focus:border-blue-600 border-b-2 border-gray-500 transition duration-100" placeholder={placeholder} value={value} onChange={(e) => onInputChange(e.target.value)} />
                </div>
            </label>
        </div>
    )
}