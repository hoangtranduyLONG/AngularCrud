import { Component, OnInit } from '@angular/core';
class Users {
  id : number = 0;
  name : string = "";
  img : string = "";

  constructor(id: number, name: string, img: string) {
    this.id = id;
    this.name = name;
    this.img = img;
  }
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Users[] = [];
  id : number = 0;
  name : string = "";
  img : string = "";

  constructor() {
    this.users.push(new Users(1, "mina", "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/7/25/822339/Mina-Twice-1.jpg"))
    this.users.push(new Users(2, "yoona", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAGwASgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAQIDBQYAB//EADQQAAEDAgMECAYCAwEAAAAAAAEAAgMEERIhQQUxUWEGEyIzcYGRoQcUIzJiseHwQsLRUv/EABkBAAMBAQEAAAAAAAAAAAAAAAEDBAIABf/EAB4RAAIDAQEAAwEAAAAAAAAAAAABAgMRIRIiMTIT/9oADAMBAAIRAxEAPwD1BcuSFOCC7U2hT7LoZayrfhijGfEnQDmV430i6YbS2rJI5kxhgNwyKO9gOZ1Kufi1tB79qUtBjPVRQ9YWjVziR+h7lYuKmlq3tp4W4pCdw05JE59wfCHNG09VVMdiZO+OQZh7XEErY9F+n9ZSVLKXbb/mKYm3Xb3x8zxHuoIuglc+BknXRskw5tcNyoNtbFrNnyD5llnf4yNzaeSWpY+Df56unvUcjZGNkY4OY4AtcDcEKYG6wnwv2lJU7HlpJXYvlnDBc7mnTyIPqtwwqqL1aSSXl4SBKkCVEA1IUpTHFcceOfE0YOl0r3Z2gY4DhlYe4J8lbfD7ZPVU/wA7UM+pLm3EM8PHzUPT6gkqOktQXtuwwxSRm2/Qj291q3UxfQsbTNZfCMOK9gPAb1HY/ky6pfFMtnWDAFn+k8NNUUEsczmAkZXKn2FS1kUVq7q+szuY7236X5WQNdsuaonEzKh8dgQWtG86H+5LDGIzfw8rTQbefTvv1dTHbLRw/p9V6zE7EAQvM9j7NLdvSSDfFM0DzzK9Ip8mgBU0tuJHekphbdyVMYU9OEjSmEpxTCuOKPpBQsqJaafDeSJ+mo1HskpKinfNJDBI1zobY2asuLi6sqxuJo5FYrolFN87titkJLqiptn+Jd/0einvSXSmhvcNXLIWkOY0kDeAg4395cWucgdE2rpIKyP6jy1w/IhARRxUmKKlAc693vv+yptLcXnV9hOz6RjK+SUA9rtZ6laODcqaidiINrG2YVxDuV1eZw8uzfXQlpT1ECpLrZkQqF7wFPbLNQyszuNEGckCVkjmMFm3DtToqymhbC3DG1oBcXEAWzJuSr8tBaA4AtO8FBzbN7WKmdb8SVPbCUnpTVOMeFXVsxCw3qGmpWx0EbrZuJJ9VYT0NS2zurdlzBXQxlsTo5GkW3ApHlplPpNcYPRDtusL2Oat4bnIITZkbcDw0Wdi7R4qxiZgaC0dp2p0VVXIoit7JnNJGRT7pr3X0yHHVND8k3RTCHZeiabAv8Fz/uI5JCfqDmLrjR0gDWtb5ey6xBbnolIuc9AueOwDwt+0DhHEuY7kEFUZS5o6Pe8eKAnJ6xvDCPVLs/Iyr9Eez+xVOb/6VqGhosFTXMcrZBoVbhxe0OAyK6p6sDcu6Mfmb6BDgqWUj7B5qLA7gUwSwp/eDwKa6/WMOmE39v5TpO9Z4FRE/Z6IMKCNCuIvGQm3sE4u+mStAGNP1TzCFqBaJuWeRv4j+ESzvrfih6ntUzHDeMrcv6Fia1G4PGDEXCLoJQ1pjebWzCFjddRSzGJ4ewjEOKmjLy9KpR9LC6c1jh2hnxCZhsmUsvWsDrGxAI9ETlwVa6RNEDjd7D4qH/ID8iFID9ngVE89tnN/+qBomzTn90VyV3dnwWmZGt7554NAUM0ZfSEDfvCmb90nl+kg7pDND9FPE/BbHkdQkji+amJPdjfzU8sEb5xjYDfipupjb9rALcAp1V0oldzgQ14jAAItwSddzQERublFAZKgmbP/2Q=="))
  }
  create () :void {
    this.users.push(new Users(this.id, this.name, this.img));
    this.id = 0;
    this.name = "";
    this.img = "";
  }
  showedit(id : number){
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id){
        this.id = this.users[i].id;
        this.name = this.users[i].name;
        this.img = this.users[i].img;
        return;
      }
    }
  }
  submitEdit(id:number) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        this.users[i] = new Users(this.id, this.name, this.img);
        this.id = 0;
        this.name = "";
        this.img = "";
        return;
      }
    }
  }
  delete(id: number): void {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        this.users.splice(i, 1)
        return;
      }
    }
  }

  ngOnInit(): void {
  }

}
