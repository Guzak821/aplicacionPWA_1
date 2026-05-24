using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace EjerciciosRazor.Pages.Binomio
{
    public class IndexModel : PageModel
    {
        [BindProperty] public double A { get; set; }
        [BindProperty] public double B { get; set; }
        [BindProperty] public double X { get; set; }
        [BindProperty] public double Y { get; set; }
        [BindProperty] public int N { get; set; }

        public double? Resultado { get; set; }
        public List<string> Terminos { get; set; } = new();

        public void OnGet() { }

        public void OnPost()
        {
            Resultado = 0;
            for (int k = 0; k <= N; k++)
            {
                double combinatoria = Factorial(N) / (Factorial(k) * Factorial(N - k));
                double ax = Math.Pow(A * X, N - k);
                double by = Math.Pow(B * Y, k);
                double termino = combinatoria * ax * by;
                Resultado += termino;

                Terminos.Add($"C({N},{k}) × (ax)^{N - k} × (by)^{k} = " +
                             $"{combinatoria} × {ax:F4} × {by:F4} = {termino:F4}");
            }
        }

        private double Factorial(int n)
        {
            if (n <= 1) return 1;
            double result = 1;
            for (int i = 2; i <= n; i++) result *= i;
            return result;
        }
    }
}