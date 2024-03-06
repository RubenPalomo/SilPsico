import Header from "./components/Header/Header";
import TextArea from "./components/TextArea/TextArea";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center bg-lime-50"
      data-testid="home"
    >
      <Header />
      <div className="flex flex-col">
        <TextArea
          title="Recibe tu tratamiento de NEUROPSICOLOGÍA a domicilio"
          text="Realizo tratamientos de neuropsicología a domicilio en toda la zona
        sur de Madrid (Móstoles, Alcorcón, Leganés, Getafe, Fuenlabrada y
        Villaviosa de Odón)."
        />
        <TextArea
          title="Patologías"
          text={`Especializada en tratamiento de daño cerebral adquirido:
  · Ictus
  · Traumatismos craneoencefálicos
  · Tumores cerebrales
  Así como en trastornos del desarrollo:
  · TDAH
  · TEA
Y en psicología clínica:
  · Ansiedad
  · Depresión
  · Estrés
  · Duelo`}
        />
      </div>
    </main>
  );
}
