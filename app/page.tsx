import InfoCardList from '@/app/components/InfoCardList';
import ResourceLinks from '@/app/components/ResourceLinks';

export default function HomePage() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-center">Willkommen zur Finanzbildung BTC</h1>
            <InfoCardList />
            <ResourceLinks />
        </div>
    );
}
