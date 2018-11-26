using System;

namespace CamelCase
{
    static class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("".CamelCase());
            Console.WriteLine("Done");
        }

        public static string CamelCase(this string str)
        {
            if (str == "") return "";
            string[] arr = str.Split(' ');
            for (int i = 0; i < arr.Length; i++)
            {
                arr[i] = arr[i][0].ToString().ToUpper() + arr[i].Substring(1);
            }
            return String.Join("", arr);
        }
    }
}