import contents from "@/data/contents.json";
import Link from "next/link";

export default function Navigation() {
    return (
        <nav>
            <ul>
                {contents.navigation.map((item) => (
                    <li key={item.link}>
                        <Link href={item.link}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}