using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Data
{
    public class EmpImplementtion : IEmp
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public EmpImplementtion(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<bool> AddEmp(EmployeeDto empDto)
        {
            var newEmp = new Emplyoees
            {
                Name = empDto.Name,
                Gender = empDto.Gender,
                Nationality = empDto.Nationality,
                Decs = empDto.Desc,
                IsDelete = false
            };
            var data = await _context.Emplyoees.AddAsync(newEmp);
            _context.SaveChanges();
            return true;
        }

        public async Task<bool> DeleteEmp(int id)
        {
            var empFromRepo = await _context.Emplyoees.FirstOrDefaultAsync(x => x.Id == id);
            empFromRepo.IsDelete = true;
            _context.Emplyoees.Update(empFromRepo);
            _context.SaveChanges();
            return true;
        }

        public async Task<Emplyoees> GetEmp(int id)
        {
            var empFromRepo = await _context.Emplyoees.FirstOrDefaultAsync(x => x.Id == id && x.IsDelete == false);
            var data = _mapper.Map<Emplyoees>(empFromRepo);
            return data;
        }

        public async Task<IEnumerable<Emplyoees>> GetEmps()
        {
            var empFromRepo = await _context.Emplyoees.Where(x => x.IsDelete == false).ToListAsync();
            var data = _mapper.Map<List<Emplyoees>>(empFromRepo);
            return data;
        }

        public async Task<Emplyoees> PutEmp(EmployeeDto empDto, int id)
        {
            var empFromRepo = await _context.Emplyoees.FirstOrDefaultAsync(x => x.Id == id && x.IsDelete == false);
            empFromRepo.Name = empDto.Name;
            empFromRepo.Gender = empDto.Gender;
            empFromRepo.Decs = empDto.Desc;
            empFromRepo.Nationality = empDto.Nationality;
            _context.Emplyoees.Update(empFromRepo);
            _context.SaveChanges();

            var data = _mapper.Map<Emplyoees>(empFromRepo);
            return data;
        }
    }
}
