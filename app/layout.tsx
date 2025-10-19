import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import '@/app/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="de">
        <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto p-4">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}
