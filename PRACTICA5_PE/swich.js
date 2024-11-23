let dayweek = "Lunes"

switch (dayweek) {
    case "Lunes":
        
        break;

    case "Miercoles":
        case "Viernes":
            console.log("Es un dia de trabajo")
        break;

    default:
        console.log("Es un dia de descanso")
        break;
}