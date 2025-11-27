using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TesteFluxo
{
    public class ConversorTemperatura
    {
        public double CelsiusParaFahrenheit(double celsius)
        {
            return (celsius * 9 / 5) + 32;
        }

        public double FahrenheitParaCelsius(double fahrenheit)
        {
            return (fahrenheit - 32) * 5 / 9;
        }
    }
}
