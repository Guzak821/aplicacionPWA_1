using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace EjerciciosRazor.Pages.Cifrado
{
    public class IndexModel : PageModel
    {
        [BindProperty] public string Mensaje { get; set; } = "";
        [BindProperty] public int N { get; set; } = 3;
        [BindProperty] public string Operacion { get; set; } = "cifrar";

        public string Resultado { get; set; } = "";

        private readonly char[] Alfabeto =
            "ABCDEFGHIJKLMNOPQRSTUVXYZ".ToCharArray(); 

        public void OnGet() { }

        public void OnPost()
        {
            Resultado = ProcesarMensaje(Mensaje.ToUpper(), N, Operacion == "cifrar");
        }

        private string ProcesarMensaje(string texto, int n, bool cifrar)
        {
            var resultado = "";
            foreach (char c in texto)
            {
                int idx = Array.IndexOf(Alfabeto, c);
                if (idx >= 0)
                {
                    int nuevoIdx = cifrar
                        ? (idx + n) % Alfabeto.Length
                        : (idx - n % Alfabeto.Length + Alfabeto.Length) % Alfabeto.Length;
                    resultado += Alfabeto[nuevoIdx];
                }
                else
                {
                    resultado += c; 
                }
            }
            return resultado;
        }
    }
}