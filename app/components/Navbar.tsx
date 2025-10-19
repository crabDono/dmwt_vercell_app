import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="text-lg font-bold">Finanzbildung BTC</div>
            <div className="space-x-4">
                <Link href="/">Home</Link>
                <Link href="/crypto-zeitreise">Zeitreise</Link>
                <Link href="/quiz">Quiz</Link>
            </div>
        </nav>
    );
}
