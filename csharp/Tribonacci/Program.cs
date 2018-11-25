using System;
using System.Collections.Generic;
using System.Linq;

namespace Tribonacci
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(Tribonacci(new double[] { 1, 1, 1 }, 0));
        }

        public static double[] Tribonacci(double[] signature, int n)
        {
            // Corner case: Output sequence smaller than input sequence.
            if (n < 4)
            {
                Array.Resize(ref signature, n);
                return signature;
            }

            List<double> nums = new List<double>(signature);

            while (nums.Count < n)
            {
                // sum of last 3 values in the sequence
                double newNum = nums[nums.Count - 1] + nums[nums.Count - 2] + nums[nums.Count - 3];
                nums.Add(newNum);
            }

            double[] output = nums.ToArray();
            return output;
        }
    }
}