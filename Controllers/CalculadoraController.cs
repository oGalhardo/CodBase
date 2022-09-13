using Microsoft.AspNetCore.Mvc;
using System.Drawing;

namespace baseMVCJUNIOR.Controllers
{
    public class CalculadoraController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Soma(int valor1, int valor2)
        {
            var total = valor1 + valor2;
            return Ok(total);
        }
        public IActionResult Multiplicacao(int valor1, int valor2)
        {
            var total = valor1 * valor2;
            return Ok(total);
        }
        public IActionResult Divisao(int valor1, int valor2)
        {
            var total = valor1 / valor2;
            return Ok(total);
        }
        public IActionResult Subtracao(int valor1, int valor2)
        {
            var total = valor1 - valor2;
            return Ok(total);
        }
    }
}
