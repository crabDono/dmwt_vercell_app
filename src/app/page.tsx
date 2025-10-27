import TimelineCard from "../components/ui/TimelineCard";


export default function Page() {

  const timelineItems = [
    {year: "2009", title: "Einführung von Bitcoin", description: "Das Bitcoin Zahlungssystem wurde laut Satashi Nakomoto 2007 eingeführt.", id:"0"},
    {year: "2009", title: "Einführung von Bitcoin", description: "Das Bitcoin Zahlungssystem wurde laut Satashi Nakomoto 2007 eingeführt.", id:"1"},
    {year: "2011", title: "Steigender Kurs", description: "Das Bitcoin Zahlungssystem wurde laut Satashi Nakomoto 2007 eingeführt.", id:"2"},
  ]




  return (
    <ul>
      {timelineItems.map((item) => (
          <li key={item.id}>
            <TimelineCard
              year={item.year}
              title={item.title}
              description={item.description}
            />
          </li>
        ))}
      </ul>


    );
}