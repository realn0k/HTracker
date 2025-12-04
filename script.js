let habits = JSON.parse(localStorage.getItem('habits')) || [];

function displayHabits() {
  const list = document.getElementById('habitList');
  list.innerHTML = '';
  habits.forEach((habit, index) => {
    const div = document.createElement('div');
    div.textContent = habit.name + (habit.done ? ' ✅' : '');
    div.onclick = () => {
      habits[index].done = !habits[index].done;
      localStorage.setItem('habits', JSON.stringify(habits));
      displayHabits();
    }
    list.appendChild(div);
  });
}

document.getElementById('addHabitBtn').onclick = () => {
  const name = prompt('Введите название привычки:');
  if(name) {
    habits.push({name, done: false});
    localStorage.setItem('habits', JSON.stringify(habits));
    displayHabits();
  }
}

displayHabits();