export default function InfoCard({ title, description }: { title: string, description: string }) {
    return (
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p>{description}</p>
        </div>
    );
}
