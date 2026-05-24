using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace EjerciciosRazor.Pages.IMC
{
    public class IndexModel : PageModel
    {
        [BindProperty]
        public double Peso { get; set; }

        [BindProperty]
        public double Altura { get; set; }

        public double? IMC { get; set; }
        public string Clasificacion { get; set; } = "";
        public string Recomendacion { get; set; } = "";
        public string ImagenUrl { get; set; } = "";

        public void OnGet() { }

        public void OnPost()
        {
            if (Altura > 0)
            {
                IMC = Peso / (Altura * Altura);

                if (IMC < 18)
                {
                    Clasificacion = "Peso Bajo";
                    Recomendacion = "Necesitas aumentar tu ingesta calórica con alimentos nutritivos. Consulta a un nutriólogo.";
                    ImagenUrl = "https://img.icons8.com/color/96/underweight.png";
                }
                else if (IMC < 25)
                {
                    Clasificacion = "Peso Normal";
                    Recomendacion = "¡Felicidades! Mantén tu peso con una dieta balanceada y ejercicio regular.";
                    ImagenUrl = "https://img.icons8.com/color/96/normal-weight.png";
                }
                else if (IMC < 27)
                {
                    Clasificacion = "Sobrepeso";
                    Recomendacion = "Reduce el consumo de azúcares y grasas. Realiza actividad física 30 min/día.";
                    ImagenUrl = "https://img.icons8.com/color/96/overweight.png";
                }
                else if (IMC < 30)
                {
                    Clasificacion = "Obesidad Grado I";
                    Recomendacion = "Visita a tu médico. Dieta controlada y ejercicio supervisado son clave.";
                    ImagenUrl = "https://img.icons8.com/color/96/overweight.png";
                }
                else if (IMC < 40)
                {
                    Clasificacion = "Obesidad Grado II";
                    Recomendacion = "Es importante atención médica especializada. Evita sedentarismo y alimentos ultraprocesados.";
                    ImagenUrl = "https://img.icons8.com/color/96/obese.png";
                }
                else
                {
                    Clasificacion = "Obesidad Grado III";
                    Recomendacion = "Requieres atención médica urgente. Consulta con especialistas en obesidad.";
                    ImagenUrl = "https://img.icons8.com/color/96/obese.png";
                }
            }
        }
    }
}