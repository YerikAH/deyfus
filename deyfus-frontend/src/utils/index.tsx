export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export function formatCurrentDate() {
  const daysOfWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const monthsOfYear = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const month = monthsOfYear[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return `${dayOfWeek}, ${dayOfMonth} de ${month} del ${year}`;
}
