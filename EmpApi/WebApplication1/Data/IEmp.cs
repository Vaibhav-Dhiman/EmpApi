using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1
{
    public interface IEmp
    {
        Task<IEnumerable<Emplyoees>> GetEmps();
        Task<Emplyoees> GetEmp(int id);
        Task<Emplyoees> PutEmp(EmployeeDto bookDto, int id);
        Task<bool> AddEmp(EmployeeDto bookDto);
        Task<bool> DeleteEmp(int id);
    }
}
