export default function SuitedButton({ text, theme, icon }) {

    function setTheme(theme) {
        if (theme == 'secondary') {
            return 'py-2.5 px-5 me-2 mb-2 text-sm font-medium border-gray-600 border-2 text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-200 hover:text-black hover:border-white focus:z-10 focus:ring-4 focus:ring-gray-100'
        } else {
            return 'text-white bg-gradient-to-r from-primaryYellow-1000 to-primaryDarkYellow-1000 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' 
        }
    }

    return (
        <>
            {icon ? (
                <button type="button" className={[setTheme(theme), ' pl-10 inline-flex items-center relative cursor-pointer']}>
                    <span className="material-symbols-rounded absolute left-[14px]">
                        {icon}
                    </span>
                    {text}
                </button>) : (
                <button type="button" className={[setTheme(theme), ' cursor-pointer']}>{text}</button>
            )}
        </>
    )
}