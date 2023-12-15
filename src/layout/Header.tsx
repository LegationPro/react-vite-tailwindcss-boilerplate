import ToggleTheme from "@/components/ToggleTheme"

const Header = () => {
    return (
        <header className="p-2 dark:bg-blue-500 bg-red-500">
            <ToggleTheme />
            Header
        </header>
    )
}

export default Header