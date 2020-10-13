using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmp _repo;
        public EmployeeController(IEmp repo)
        {
            _repo = repo;
        }
        [HttpGet]
        public async Task<IActionResult> GetEmps()
        {
            var data = await _repo.GetEmps();

            if (data != null)
                return Ok(data);
            else
                return NotFound();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmp(int id)
        {
            var data = await _repo.GetEmp(id);
            if (data != null)
                return Ok(data);

            return BadRequest("Error while fetching Emplyoees");
        }

        [HttpPut]
        public async Task<IActionResult> PutEmp([FromBody] EmployeeDto empDto, int id)
        {

            if (!ModelState.IsValid)
                return BadRequest("Invalid Params!");

            var book = await _repo.PutEmp(empDto, id);

            if (book != null)
                return Ok(book);

            return BadRequest("Error while updaing book");

        }

        [HttpPost]
        public async Task<IActionResult> AddEmp([FromBody] EmployeeDto empDto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var result = await _repo.AddEmp(empDto);

            if (result == true)
                return Ok("Book Added");

            return BadRequest("Error while adding book");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmp(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest("Unable to delete book");

            var book = await _repo.DeleteEmp(id);

            if (book == true)
                return Ok("Book Removed Successfully");

            return BadRequest("Unable To Delete Book");

        }
    }
}