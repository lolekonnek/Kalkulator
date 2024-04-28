function kwadrat() {
            // Pobranie wartości z pola formularza
            var a = parseFloat(document.getElementById("a1").value);

            // Sprawdzenie, czy wprowadzona wartość jest liczbą
            if (!isNaN(a)) {
                // Obliczenie pola kwadratu
                var suma = a * a;

                // Wyświetlenie wyniku w polu wynikowym
                document.getElementById("wynik").innerHTML = "Pole kwadratu: " + suma + " cm<sup>2</sup>";
            } else {
                // Jeśli wprowadzona wartość nie jest liczbą, wyświetl komunikat o błędzie
                document.getElementById("wynik").innerHTML = "Podaj liczbę!";
            }
        }
		
        function prostokat() {
            // Pobranie wartości z pól formularza
            var a = parseFloat(document.getElementById("a2").value);
            var b = parseFloat(document.getElementById("b2").value);

            // Sprawdzenie, czy wprowadzone wartości są liczbami
            if (!isNaN(a) && !isNaN(b)) {
                // Obliczenie pola prostokąta
                var suma = a * b;

                // Wyświetlenie wyniku w polu wynikowym
                document.getElementById("wynik2").innerHTML = "Pole prostokąta: " + suma + " cm<sup>2</sup>";
            } else {
                // Jeśli wprowadzone wartości nie są liczbami, wyświetl komunikat o błędzie
                document.getElementById("wynik2").innerHTML = "Podaj liczby!";
            }
        }
		

function trujkat() {
            // Pobranie wartości z pól formularza
            var a = parseFloat(document.getElementById("a3").value);
            var h = parseFloat(document.getElementById("h").value);

            // Obliczenie pola trójkąta
            var pole = (a * h) / 2;

            // Wyświetlenie wyniku w polu wynikowym
            document.getElementById("wynik3").innerHTML = "Pole trójkąta: " + pole +" cm<sup>2</sup>";
        }

function trapez() {
            // Pobranie wartości z pól formularza
            var a = parseFloat(document.getElementById("a4").value);
			var b = parseFloat(document.getElementById("b3").value);
            var h = parseFloat(document.getElementById("h2").value);

            // Obliczenie pola trójkąta
            var pole = [ (a + b) * h] / 2;

            // Wyświetlenie wyniku w polu wynikowym
            document.getElementById("wynik4").innerHTML = "Pole trapeza: " + pole +" cm<sup>2</sup>";
        }
		
function rowno() {
            // Pobranie wartości z pól formularza
            var a = parseFloat(document.getElementById("a5").value);
            var h = parseFloat(document.getElementById("h3").value);

            // Obliczenie pola trójkąta
            var pole = a * h;

            // Wyświetlenie wyniku w polu wynikowym
            document.getElementById("wynik5").innerHTML = "Pole równoległoboku: " + pole +" cm<sup>2</sup>";
        }
		
function deltoid() {
            // Pobranie wartości z pól formularza
            var d1 = parseFloat(document.getElementById("d1").value);
            var d2 = parseFloat(document.getElementById("d2").value);

            // Obliczenie pola trójkąta
            var pole = (d1 * d2) / 2;

            // Wyświetlenie wyniku w polu wynikowym
            document.getElementById("wynik6").innerHTML = "Pole deltoidu: " + pole +" cm<sup>2</sup>";
        }
		
function obliczPoleKola() {
            // Pobranie wartości promienia koła z pola formularza
            var promien = document.getElementById("promien").value;

            // Sprawdzenie, czy wprowadzona wartość jest liczbą dodatnią
            if (promien > 0) {
                // Obliczenie pola koła na podstawie wzoru πr²
                var pole = Math.PI * Math.pow(promien, 2);

                // Wyświetlenie wyniku w elemencie wynikowym
                document.getElementById("wynik7").innerHTML = "Pole koła wynosi: " + pole.toFixed(2);
            } else {
                // Komunikat o błędzie, jeśli wprowadzona wartość nie jest liczbą dodatnią
                document.getElementById("wynik7").innerHTML = "Podaj poprawną wartość promienia!";
            }
        }

function okwadrat() {
            // Pobranie wartości z pola formularza
            var a = parseFloat(document.getElementById("a6").value);

            // Sprawdzenie, czy wprowadzona wartość jest liczbą
            if (!isNaN(a)) {
                // Obliczenie pola kwadratu
                var suma = 4 * a;

                // Wyświetlenie wyniku w polu wynikowym
                document.getElementById("wynik8").innerHTML = "Obwód kwadratu: " + suma + " cm";
            } else {
                // Jeśli wprowadzona wartość nie jest liczbą, wyświetl komunikat o błędzie
                document.getElementById("wynik8").innerHTML = "Podaj liczbę!";
            }
        }
		
function oprostokat() {
            // Pobranie wartości z pól formularza
            var a = parseFloat(document.getElementById("a7").value);
            var b = parseFloat(document.getElementById("b4").value);

            // Sprawdzenie, czy wprowadzone wartości są liczbami
            if (!isNaN(a) && !isNaN(b)) {
                // Obliczenie pola prostokąta
                var suma = 2 * a + 2 * b;

                // Wyświetlenie wyniku w polu wynikowym
                document.getElementById("wynik9").innerHTML = "Obwód prostokąta: " + suma + " cm";
            } else {
                // Jeśli wprowadzone wartości nie są liczbami, wyświetl komunikat o błędzie
                document.getElementById("wynik9").innerHTML = "Podaj liczby!";
            }
        }

function otrojkat() {
            // Pobranie wartości z pól formularza
            var a = parseFloat(document.getElementById("a8").value);
            var b = parseFloat(document.getElementById("b5").value);
			var c = parseFloat(document.getElementById("c").value);

            // Sprawdzenie, czy wprowadzone wartości są liczbami
            if (!isNaN(a) && !isNaN(b)) {
                // Obliczenie pola prostokąta
                var suma = a + b + c;

                // Wyświetlenie wyniku w polu wynikowym
                document.getElementById("wynik10").innerHTML = "Obwód trójkąta: " + suma + " cm";
            } else {
                // Jeśli wprowadzone wartości nie są liczbami, wyświetl komunikat o błędzie
                document.getElementById("wynik10").innerHTML = "Podaj liczby!";
            }
        }

function otrapez() {
            // Pobranie wartości z pól formularza
            var a = parseFloat(document.getElementById("a9").value);
            var b = parseFloat(document.getElementById("b6").value);
			var c = parseFloat(document.getElementById("c2").value);
			var d = parseFloat(document.getElementById("d").value);

            // Sprawdzenie, czy wprowadzone wartości są liczbami
            if (!isNaN(a) && !isNaN(b)) {
                // Obliczenie pola prostokąta
                var suma = a + b + c + d;

                // Wyświetlenie wyniku w polu wynikowym
                document.getElementById("wynik11").innerHTML = "Obwód trapezu: " + suma + " cm";
            } else {
                // Jeśli wprowadzone wartości nie są liczbami, wyświetl komunikat o błędzie
				alert("Podaj liczby!");
            }
        }

function okolo() {
            // Pobranie wartości promienia koła z pola formularza
            var promien = document.getElementById("promien2").value;

            // Sprawdzenie, czy wprowadzona wartość jest liczbą dodatnią
            if (promien > 0) {
                // Obliczenie pola koła na podstawie wzoru πr²
                var obw = Math.PI * 2 * Math.pow(promien, 2);

                // Wyświetlenie wyniku w elemencie wynikowym
                document.getElementById("wynik12").innerHTML = "Obwód koła wynosi: " + obw.toFixed(2) + " cm";
            } else {
                // Komunikat o błędzie, jeśli wprowadzona wartość nie jest liczbą dodatnią
                alert("Podaj poprawną wartość promienia!");
            }
        }

function logarytm() {
    var x = parseFloat(document.getElementById("x").value);
    var b = parseFloat(document.getElementById("b7").value);
    
    if (!isNaN(x) && !isNaN(b)) {
        var wynik = Math.log(x) / Math.log(b);
        document.getElementById("wynik13").innerHTML = "Wynik logarytmu o podstawie " + b + " z liczby " + x + "wynosi : " + wynik ;
    } else {
        // Jeśli wprowadzone wartości nie są liczbami, wyświetl komunikat o błędzie
        alert("Podaj liczby!");
    }
}

function logarytm10() {
    var x = parseFloat(document.getElementById("x2").value);
    
    if (!isNaN(x)) {
        var wynik = Math.log(x) / Math.log(10);
        document.getElementById("wynik14").innerHTML = "Wynik logarytmu odziesiętnego z liczby " + x + " wynosi : " + wynik ;
    } else {
        // Jeśli wprowadzone wartości nie są liczbami, wyświetl komunikat o błędzie
        alert("Podaj liczby!");
    }
}

function logarytmn() {
    var x = parseFloat(document.getElementById("x3").value);
    
    if (!isNaN(x)) {
        var wynik = Math.log(x);
        document.getElementById("wynik15").innerHTML = "Wynik logarytmu naturalnego (ln) z liczby " + x + " wynosi : " + wynik ;
    } else {
        // Jeśli wprowadzone wartości nie są liczbami, wyświetl komunikat o błędzie
        alert("Podaj liczby!");
    }
}

