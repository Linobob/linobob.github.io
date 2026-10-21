// Transcrypt'ed from Python, 2025-08-25 18:51:39
var dizionarioOriginale = {};
var dizionarioPeggio = {};
var random = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, filter, float, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_enumerate, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_dizionarioPeggio__ from './dizionarioPeggio.js';
__nest__ (dizionarioPeggio, '', __module_dizionarioPeggio__);
import * as __module_dizionarioOriginale__ from './dizionarioOriginale.js';
__nest__ (dizionarioOriginale, '', __module_dizionarioOriginale__);
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
var __name__ = '__main__';
export var articoliMaschiliConsonante = ['IL ', 'UN '];
export var articoliMaschiliVocale = ["L'", 'UN '];
export var articoliFemminiliConsonante = ['LA ', 'UNA '];
export var articoliFemminiliVocale = ["L'", "UN'"];
export var parola = null;
export var genereParola = null;
export var dizionario = null;
export var genera_poesia = function (parola, genereParola) {
	if (typeof parola == 'undefined' || (parola != null && parola.hasOwnProperty ("__kwargtrans__"))) {;
		var parola = null;
	};
	if (typeof genereParola == 'undefined' || (genereParola != null && genereParola.hasOwnProperty ("__kwargtrans__"))) {;
		var genereParola = null;
	};
	var haiku = [];
	var forma = random.randint (1, 6);
	if (forma == 1) {
		var genere = random.choice (['maschile', 'femminile']);
		var iniziale = random.choice (['consonante', 'vocale']);
		haiku.append ('{}{} {} -'.format (scegli_articolo (genere, iniziale), scegli_sostantivo (genere, iniziale), scegli_aggettivo (genere)));
		var genere = random.choice (['maschile', 'femminile']);
		haiku.append ('{} {},'.format (scegli_aggettivo (genere), scegli_sostantivo (genere, null)));
		if (parola) {
			haiku.append ('{} {} {}'.format (scegli_avverbio (), parola, scegli_verbo ()));
		}
		else {
			var genere = random.choice (['maschile', 'femminile']);
			var iniziale = random.choice (['consonante', 'vocale']);
			haiku.append ('{} {}{} {}'.format (scegli_avverbio (), scegli_articolo (genere, iniziale), scegli_sostantivo (genere, iniziale), scegli_verbo ()));
		}
	}
	else if (forma == 2) {
		var genere = random.choice (['maschile', 'femminile']);
		var iniziale = random.choice (['consonante', 'vocale']);
		var preposizione = scegli_preposizione ();
		var articolo = scegli_articolo (genere, iniziale);
		haiku.append ('{}{} {}'.format (combina_preposizioni_articolate (preposizione, articolo), scegli_sostantivo (genere, iniziale), scegli_aggettivo (genere)));
		var genere = random.choice (['maschile', 'femminile']);
		var iniziale = random.choice (['consonante', 'vocale']);
		haiku.append ('{}{} {}.'.format (scegli_articolo (genere, iniziale), scegli_sostantivo (genere, iniziale), scegli_verbo_da_preposizione (preposizione)));
		if (parola) {
			var primoSostantivo = parola.__getslice__ (2, null, 1).lstrip ();
		}
		else {
			var genere = random.choice (['maschile', 'femminile']);
			var primoSostantivo = scegli_sostantivo (genere, null);
		}
		var genere = random.choice (['maschile', 'femminile']);
		var iniziale = random.choice (['consonante', 'vocale']);
		if (random.random () < 0.15) {
			var preposizione = 'DI';
		}
		else {
			var preposizione = scegli_preposizione ();
		}
		var articolo = scegli_articolo (genere, iniziale);
		haiku.append ('{} {}{}'.format (primoSostantivo, combina_preposizioni_articolate (preposizione, articolo), scegli_sostantivo (genere, iniziale)));
	}
	else if (forma == 3) {
		var genere = random.choice (['maschile', 'femminile']);
		var iniziale = random.choice (['consonante', 'vocale']);
		haiku.append ('{} {}{}'.format (scegli_avverbio (), scegli_articolo (genere, iniziale), scegli_sostantivo (genere, iniziale)));
		var verbo = scegli_verbo ();
		var genere = random.choice (['maschile', 'femminile']);
		var iniziale = random.choice (['consonante', 'vocale']);
		var preposizione = scegli_preposizione_da_verbo (verbo);
		var articolo = scegli_articolo (genere, iniziale);
		haiku.append ('{} {}{}.'.format (verbo, combina_preposizioni_articolate (preposizione, articolo), scegli_sostantivo (genere, iniziale)));
		if (parola) {
			var genere = genereParola;
			haiku.append ('{} {} -'.format (parola.__getslice__ (2, null, 1).lstrip (), scegli_aggettivo (genere)));
		}
		else {
			var genere = random.choice (['maschile', 'femminile']);
			haiku.append ('{} {} -'.format (scegli_sostantivo (genere, null), scegli_aggettivo (genere)));
		}
	}
	else if (forma == 4) {
		if (parola) {
			var genere = genereParola;
			haiku.append ('{} {} -'.format (parola.__getslice__ (2, null, 1).lstrip (), scegli_aggettivo (genere)));
		}
		else {
			var genere = random.choice (['maschile', 'femminile']);
			haiku.append ('{} {} -'.format (scegli_sostantivo (genere, null), scegli_aggettivo (genere)));
		}
		var genere = random.choice (['maschile', 'femminile']);
		var iniziale = random.choice (['consonante', 'vocale']);
		var preposizione = scegli_preposizione ();
		var articolo = scegli_articolo (genere, iniziale);
		haiku.append ('{}{}'.format (combina_preposizioni_articolate (preposizione, articolo), scegli_sostantivo (genere, iniziale)));
		var genere = random.choice (['maschile', 'femminile']);
		var iniziale = random.choice (['consonante', 'vocale']);
		haiku.append ('{}{} {}'.format (scegli_articolo (genere, iniziale), scegli_sostantivo (genere, iniziale), scegli_verbo_da_preposizione (preposizione)));
	}
	else if (forma == 5) {
		var genere = random.choice (['maschile', 'femminile']);
		var iniziale = random.choice (['consonante', 'vocale']);
		haiku.append ('{}{} {} {},'.format (scegli_articolo (genere, iniziale), scegli_sostantivo (genere, iniziale), scegli_aggettivo (genere), scegli_verbo ()));
		if (parola) {
			haiku.append ('{} {} ...'.format (scegli_verbo (), parola));
		}
		else {
			var genere = random.choice (['maschile', 'femminile']);
			var iniziale = random.choice (['consonante', 'vocale']);
			haiku.append ('{} {}{} ...'.format (scegli_verbo (), scegli_articolo (genere, iniziale), scegli_sostantivo (genere, iniziale)));
		}
		var genere = random.choice (['maschile', 'femminile']);
		var iniziale = random.choice (['consonante', 'vocale']);
		haiku.append ('{}{}'.format (scegli_articolo (genere, iniziale), scegli_sostantivo (genere, iniziale)));
	}
	else if (forma == 6) {
		var genere = random.choice (['maschile', 'femminile']);
		var iniziale = random.choice (['consonante', 'vocale']);
		haiku.append ('{}{} {} {} -'.format (scegli_articolo (genere, iniziale), scegli_sostantivo (genere, iniziale), scegli_aggettivo (genere), scegli_verbo ()));
		if (parola) {
			haiku.append ('{}'.format (parola.__getslice__ (2, null, 1).lstrip ()));
		}
		else {
			var genere = random.choice (['maschile', 'femminile']);
			haiku.append ('{}'.format (scegli_sostantivo (genere, null)));
		}
		var genere = random.choice (['maschile', 'femminile']);
		haiku.append ('{} {} CHE {}'.format (scegli_aggettivo (genere), scegli_sostantivo (genere, null), scegli_verbo ()));
	}
	return haiku;
};
export var scegli_articolo = function (genere, iniziale) {
	if (genere == 'maschile' && iniziale == 'consonante') {
		return random.choice (articoliMaschiliConsonante);
	}
	else if (genere == 'maschile' && iniziale == 'vocale') {
		return random.choice (articoliMaschiliVocale);
	}
	else if (genere == 'femminile' && iniziale == 'consonante') {
		return random.choice (articoliFemminiliConsonante);
	}
	else if (genere == 'femminile' && iniziale == 'vocale') {
		return random.choice (articoliFemminiliVocale);
	}
	else {
		return 'Erore';
	}
};
export var scegli_sostantivo = function (genere, iniziale) {
	if (typeof iniziale == 'undefined' || (iniziale != null && iniziale.hasOwnProperty ("__kwargtrans__"))) {;
		var iniziale = null;
	};
	if (!(iniziale) && genere == 'maschile') {
		return random.choice (dizionario ['sostantiviMaschili']);
	}
	else if (!(iniziale) && genere == 'femminile') {
		return random.choice (dizionario ['sostantiviFemminili']);
	}
	else if (genere == 'maschile' && iniziale == 'consonante') {
		return random.choice (dizionario ['sostantiviMaschiliConsonante']);
	}
	else if (genere == 'maschile' && iniziale == 'vocale') {
		return random.choice (dizionario ['sostantiviMaschiliVocale']);
	}
	else if (genere == 'femminile' && iniziale == 'consonante') {
		return random.choice (dizionario ['sostantiviFemminiliConsonante']);
	}
	else if (genere == 'femminile' && iniziale == 'vocale') {
		return random.choice (dizionario ['sostantiviFemminiliVocale']);
	}
	else {
		return 'Erore';
	}
};
export var scegli_aggettivo = function (genere) {
	if (genere == 'maschile') {
		return random.choice (dizionario ['aggettiviMaschili']);
	}
	else if (genere == 'femminile') {
		return random.choice (dizionario ['aggettiviFemminili']);
	}
	else {
		return 'Erore';
	}
};
export var scegli_avverbio = function () {
	return random.choice (dizionario ['avverbi']);
};
export var scegli_verbo = function () {
	return random.choice (dizionario ['verbi']);
};
export var scegli_verbo_da_preposizione = function (preposizione) {
	if (__in__ (preposizione, ['IN', 'SU', 'PRESSO', 'OLTRE', 'CON', 'PER'])) {
		return random.choice (dizionario ['verbiSeiPreposizioni']);
	}
	else if (preposizione == 'DA') {
		return random.choice (dizionario ['verbiDa']);
	}
	else if (preposizione == 'DI') {
		return random.choice (dizionario ['verbiA_Di']);
	}
	else if (preposizione == 'A') {
		return random.choice (random.choice ([dizionario ['verbiA'], dizionario ['verbiA_Di']]));
	}
};
export var scegli_preposizione_da_verbo = function (verbo) {
	if (__in__ (verbo, dizionario ['verbiSeiPreposizioni'])) {
		return random.choice (['IN', 'SU', 'PRESSO', 'OLTRE', 'CON', 'PER']);
	}
	else if (__in__ (verbo, dizionario ['verbiA_Di'])) {
		return random.choice (['IN', 'SU', 'PRESSO', 'OLTRE', 'CON', 'PER', 'A', 'DI']);
	}
	else if (__in__ (verbo, dizionario ['verbiA'])) {
		if (random.random () < 0.65) {
			return random.choice (['IN', 'SU', 'PRESSO', 'OLTRE', 'CON', 'PER']);
		}
		else {
			return 'A';
		}
	}
	else if (__in__ (verbo, dizionario ['verbiDa'])) {
		if (random.random () < 0.65) {
			return random.choice (['IN', 'SU', 'PRESSO', 'OLTRE', 'CON', 'PER']);
		}
		else {
			return 'DA';
		}
	}
};
export var scegli_preposizione = function () {
	return random.choice (dizionario ['preposizioni']);
};
export var combina_preposizioni_articolate = function (preposizione, articolo) {
	var risultato = '{} {}'.format (preposizione, articolo);
	if (preposizione == 'A') {
		if (articolo == 'IL ') {
			var risultato = 'AL ';
		}
		else if (articolo == 'LA ') {
			var risultato = 'ALLA ';
		}
		else if (articolo == "L'") {
			var risultato = "ALL'";
		}
		else if (articolo == 'LO ') {
			var risultato = 'ALLO ';
		}
	}
	else if (preposizione == 'DI') {
		if (articolo == 'IL ') {
			var risultato = 'DEL ';
		}
		else if (articolo == 'LA ') {
			var risultato = 'DELLA ';
		}
		else if (articolo == "L'") {
			var risultato = "DELL'";
		}
		else if (articolo == 'LO ') {
			var risultato = 'DELLO ';
		}
	}
	else if (preposizione == 'DA') {
		if (articolo == 'IL ') {
			var risultato = 'DAL ';
		}
		else if (articolo == 'LA ') {
			var risultato = 'DALLA ';
		}
		else if (articolo == "L'") {
			var risultato = "DALL'";
		}
		else if (articolo == 'LO ') {
			var risultato = 'DALLO ';
		}
	}
	else if (preposizione == 'IN') {
		if (articolo == 'IL ') {
			var risultato = 'NEL ';
		}
		else if (articolo == 'LA ') {
			var risultato = 'NELLA ';
		}
		else if (articolo == "L'") {
			var risultato = "NELL'";
		}
		else if (articolo == 'LO ') {
			var risultato = 'NELLO ';
		}
	}
	else if (preposizione == 'SU') {
		if (articolo == 'IL ') {
			var risultato = 'SUL ';
		}
		else if (articolo == 'LA ') {
			var risultato = 'SULLA ';
		}
		else if (articolo == "L'") {
			var risultato = "SULL'";
		}
		else if (articolo == 'LO ') {
			var risultato = 'SULLO ';
		}
	}
	return risultato;
};
export var display_main_menu = function () {
	parola = null;
	genereParola = null;
	document.getElementById ('screen').innerHTML = '';
	document.getElementById ('sidebar').innerHTML = '';
	document.getElementById ('screen').innerHTML = '\n<h1 class="text">IL POETA ELETTRONICO</h1><br><br>\n<h1 class="text">HAIKU</h1><br><br>\n<h1 class="text">DI STEFANO MAGISTRETTI</h1><br><br><br><br><br><br>\n';
	document.getElementById ('sidebar').innerHTML = '\n<button class="text sidebarbutton" onclick="haiku.display_haiku()">HAIKU CASUALE</button><br>\n<button class="text sidebarbutton" onclick="haiku.display_word_request()">HAIKU A SOGGETTO</button><br>\n';
};
export var display_haiku = function () {
	if (document.getElementById ('checkbox-32').checked) {
		var __left0__ = dizionarioPeggio.dizionarioPeggio;
		dizionario = __left0__;
		dizionario = __left0__;
	}
	else {
		dizionario = dizionarioOriginale.dizionarioOriginale;
	}
	var poesia = genera_poesia (parola, genereParola);
	var primoVerso = '<h1 class="text">{}</h1><br><br><br><br><br><br><br><br>'.format (poesia [0]);
	var primoSecondoVerso = ''.join (tuple ([primoVerso.__getslice__ (null, -(24), 1), '<h1 class="text">{}</h1><br><br><br><br><br>'.format (poesia [1])]));
	var primoSecondoTerzoVerso = ''.join (tuple ([primoSecondoVerso.__getslice__ (null, -(12), 1), '<h1 class="text">{}</h1><br><br>'.format (poesia [2])]));
	var controlli = '<button class="text sidebarbutton" onclick="haiku.display_haiku()">ANCORA</button><br>\n<button class="text sidebarbutton" onclick="haiku.display_main_menu()">INDIETRO</button>\n<button class="text sidebarbutton" onclick="take_haiku_screenshot()">STAMPA</button>\n'.format ();
	print (primoVerso);
	print (primoSecondoVerso);
	print (primoSecondoTerzoVerso);
	print (controlli);
	document.getElementById ('screen').innerHTML = '';
	document.getElementById ('sidebar').innerHTML = '';
	setTimeout (change_screen_contents, 2000, primoVerso);
	setTimeout (change_screen_contents, 4000, primoSecondoVerso);
	setTimeout (change_screen_contents, 6000, primoSecondoTerzoVerso);
	setTimeout (change_sidebar_contents, 8000, controlli);
};
export var display_word_request = function () {
	document.getElementById ('screen').innerHTML = '';
	document.getElementById ('sidebar').innerHTML = '';
	document.getElementById ('screen').innerHTML = '\n<h1 class="text">SCRIVI IL SOGGETTO CHE VUOI,</h1><br><br>\n<h1 class="text">PRECEDUTO DALL\' ARTICOLO DETERMINATO</h1><br><br>\n<h1 class="text">(IL ,LA ,LO ,L\' , SEGUITO DA UNO SPAZIO)</h1><br><br>\n<h1 class="text">POI BATTI IL TASTO \'RETURN\'</h1><br><br>\n<h1 class="text">QUAL E\'?</h1><br><br>\n<input class="text" type="text" id="parola" onkeydown="haiku.check_for_enter(event)"><br><br>\n';
	document.getElementById ('sidebar').innerHTML = '\n<button class="text sidebarbutton" onclick="haiku.check_word_input()" id="buttonAvanti">AVANTI</button><br>\n<button class="text sidebarbutton" onclick="haiku.display_main_menu()">INDIETRO</button>\n';
	document.getElementById ('parola').focus ();
};
export var display_gender_request = function () {
	document.getElementById ('screen').innerHTML = '';
	document.getElementById ('sidebar').innerHTML = '';
	document.getElementById ('screen').innerHTML = '\n<h1 class="text">A PROPOSITO, {}</h1><br><br>\n<h1 class="text">E\' FEMMINILE O MASCHILE (F/M)?</h1><br><br>\n<div id="genderChoice">\n<input type="radio" id="f" name="gender" value="F">\n<label class="text" for="f">F</label>\n<input type="radio" id="m" name="gender" value="M">\n<label class="text" for="m">M</label>\n</div>\n'.format (parola);
	document.getElementById ('sidebar').innerHTML = '\n<button class="text sidebarbutton" onclick="haiku.check_gender_input()" id="buttonAvanti">AVANTI</button><br>\n<button class="text sidebarbutton" onclick="haiku.display_word_request()">INDIETRO</button>\n';
};
export var display_haiku_introduction = function () {
	document.getElementById ('screen').innerHTML = '';
	document.getElementById ('sidebar').innerHTML = '';
	document.getElementById ('screen').innerHTML = random.choice (['\n<h1 class="text">PURTROPPO, {}</h1><br><br>\n<h1 class="text">NON MI ISPIRA MOLTO;</h1><br><br>\n<h1 class="text"> TENTO, MA NON ASPETTARTI GRANCHE\'</h1><br><br>\n'.format (parola), '\n<h1 class="text">PECCATO! {}</h1><br><br>\n<h1 class="text">E\' UN TEMA CHE NON HO MAI TRATTATO.</h1><br><br>\n<h1 class="text">PROVO, MA NON CREDO CHE</h1><br><br>\n<h1 class="text"> STIMOLI LA MIA VENA LIRICA</h1><br><br>\n'.format (parola), '\n<h1 class="text">NON SARA\' UN GRANDE HAIKU.</h1><br><br>\n<h1 class="text">{} NON MI PIACE,</h1><br><br>\n<h1 class="text"> COMUNQUE ADESSO VEDIAMO...</h1><br><br>\n'.format (parola)]);
	setTimeout (display_haiku, 6000);
};
export var check_for_enter = function (event) {
	print (event);
	print (event.key);
	if (event.key == 'Enter') {
		event.preventDefault ();
		document.getElementById ('buttonAvanti').click ();
	}
};
export var check_word_input = function () {
	parola = document.getElementById ('parola').value;
	parola = parola.upper ();
	if (__in__ (parola.__getslice__ (null, 2, 1).rstrip (), ['IL', 'LO'])) {
		genereParola = 'maschile';
		display_haiku_introduction ();
	}
	else if (__in__ (parola.__getslice__ (null, 2, 1).rstrip (), ['LA'])) {
		genereParola = 'femminile';
		display_haiku_introduction ();
	}
	else if (__in__ (parola.__getslice__ (null, 2, 1).rstrip (), ["L'"])) {
		display_gender_request ();
	}
	else {
		alert ("La parola deve essere preceduta da uno degli articoli IL - LA - LO - L'");
		document.getElementById ('parola').focus ();
	}
};
export var check_gender_input = function () {
	if (document.getElementById ('f').checked) {
		genereParola = 'femminile';
		display_haiku_introduction ();
	}
	else if (document.getElementById ('m').checked) {
		genereParola = 'maschile';
		display_haiku_introduction ();
	}
	else {
		alert ('Una delle due opzioni deve essere selezionata');
	}
};
export var change_screen_contents = function (html) {
	document.getElementById ('screen').innerHTML = html;
};
export var change_sidebar_contents = function (html) {
	document.getElementById ('sidebar').innerHTML = html;
};
export var change_background_color = function () {
	if (document.getElementById ('checkbox-32').checked) {
		document.body.style.background = 'rgb(148, 148, 148)';
		document.getElementsByClassName ('main') [0].style.background = 'rgb(148, 148, 148)';
	}
	else {
		document.body.style.background = 'rgb(182, 182, 182)';
		document.getElementsByClassName ('main') [0].style.background = 'rgb(182, 182, 182)';
	}
};
export var main = function () {
	print ('IL POETA ELETTRONICO');
	print ();
	while (true) {
		print ('1 --- HAIKU CASUALE');
		print ('2 --- HAIKU A SOGGETTO');
		while (true) {
			var scelta = input ('SCELTA? ');
			if (__in__ (scelta, ['1', '2'])) {
				break;
			}
		}
		if (scelta == '1') {
			var haiku = genera_poesia (null);
		}
		else if (scelta == '2') {
			print ('SCRIVI IL SOGGETTO CHE VUOI,');
			print ("PRECEDUTO DALL' ARTICOLO DETERMINATO");
			print ("IL ,LA ,LO ,L' , SEGUITO DA UNO SPAZIO");
			print ("POI BATTI IL TASTO 'RETURN'");
			while (true) {
				var parola = input ("QUAL E'? ");
				var parola = parola.upper ();
				if (__in__ (parola.__getslice__ (null, 2, 1).lstrip (), ['IL', 'LO'])) {
					var genereParola = 'maschile';
					break;
				}
				else if (parola.__getslice__ (null, 2, 1).lstrip () == 'LA') {
					print ('la');
					var genereParola = 'femminile';
					break;
				}
				else if (parola.__getslice__ (null, 2, 1).lstrip () == "L'") {
					print ('A PROPOSITO, {}'.format (parola));
					print ("E' FEMMINILE O MASCHILE (F/M)?");
					while (true) {
						var risposta = input ();
						if (risposta.upper () == 'M') {
							var genereParola = 'maschile';
							break;
						}
						else if (risposta.upper () == 'F') {
							var genereParola = 'femminile';
							break;
						}
						else {
							// pass;
						}
					}
					break;
				}
				else {
					// pass;
				}
			}
			var haiku = genera_poesia (parola, genereParola);
		}
		for (var verso of haiku) {
			print (verso);
		}
	}
};

