let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
    this.students.forEach(student => alert(this.title + ': ' + student) );
    }
    };
    let team = group.showList.bind(user);
    team();