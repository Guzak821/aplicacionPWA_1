using Microsoft.AspNetCore.Mvc.RazorPages;

namespace EjerciciosRazor.Pages.Arreglos
{
    public class IndexModel : PageModel
    {
        public int[] ArregloOriginal { get; set; } = Array.Empty<int>();
        public int[] ArregloOrdenado { get; set; } = Array.Empty<int>();
        public int Suma { get; set; }
        public double Promedio { get; set; }
        public List<int> Moda { get; set; } = new();
        public double Mediana { get; set; }
        public int? MedianaIzq { get; set; }
        public int? MedianaDer { get; set; }

        public void OnGet()
        {
            var rand = new Random();
            ArregloOriginal = Enumerable.Range(0, 20)
                                        .Select(_ => rand.Next(0, 101))
                                        .ToArray();
            Calcular();
        }

        private void Calcular()
        {
            Suma = ArregloOriginal.Sum();
            Promedio = (double)Suma / ArregloOriginal.Length;

            ArregloOrdenado = ArregloOriginal.OrderBy(x => x).ToArray();

            // Mediana
            int mid = ArregloOrdenado.Length / 2;
            MedianaIzq = ArregloOrdenado[mid - 1];
            MedianaDer = ArregloOrdenado[mid];
            Mediana = (MedianaIzq.Value + MedianaDer.Value) / 2.0;

            // Moda
            var frecuencias = ArregloOriginal.GroupBy(x => x)
                                             .ToDictionary(g => g.Key, g => g.Count());
            int maxFrec = frecuencias.Values.Max();
            if (maxFrec > 1)
                Moda = frecuencias.Where(f => f.Value == maxFrec)
                                  .Select(f => f.Key).OrderBy(x => x).ToList();
        }
    }
}