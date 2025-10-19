import InfoCard from './InfoCard';

const data = [
    { title: 'Bitcoin', description: 'Erste Kryptowährung der Welt.' },
    { title: 'Ethereum', description: 'Smart Contracts Plattform.' },
    { title: 'DeFi', description: 'Dezentrale Finanzanwendungen.' },
];

export default function InfoCardList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.map((item, index) => (
                <InfoCard key={index} title={item.title} description={item.description} />
            ))}
        </div>
    );
}
