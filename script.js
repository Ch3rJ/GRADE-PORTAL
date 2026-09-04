// Student data from your uploaded table
const students = [
  { name: "ALVERO, John Patrick L.", username: "SSRXE", password: "25186", pr: 95, pc: 90 },
  { name: "CABAGUE, Christian Armer S.", username: "KQUVE", password: "11684", pr: 97, pc: 96 },
  { name: "CABREJAS, PJ Jared S.", username: "QELHS", password: "97088", pr: 91, pc: 84 },
  { name: "CALLEJO, Lance Andrew C.", username: "WNIXQ", password: "24795", pr: 92, pc: 87 },
  { name: "CORNITO, Ehr James B.", username: "JXTNX", password: "29225", pr: 97, pc: 98 },
  { name: "CORTEZ, John Lei C.", username: "DWXUO", password: "14450", pr: 92, pc: 90 },
  { name: "CUETO, Vince Khaizer G.", username: "ZQGCH", password: "85955", pr: 95, pc: 83 },
  { name: "FERRER, Rameses Rafa Rathrelle M.", username: "MKAXD", password: "69502", pr: 95, pc: 90 },
  { name: "FLORES, Gabriel James P.", username: "OMXRV", password: "69361", pr: 95, pc: 88 },
  { name: "GUTIERREZ, Rhenzy Reih T.", username: "QOUXU", password: "90271", pr: 94, pc: 85 },
  { name: "NAVARRO, Vincent Yuri A.", username: "HHIKR", password: "70008", pr: 97, pc: 93 },
  { name: "ROCABO, Clarence Jake N.", username: "DBRFK", password: "49346", pr: 95, pc: 85 },
  { name: "TORRENUEVA, Ivan John D.", username: "VXNWT", password: "34164", pr: 95, pc: 88 },

  { name: "ABRES, Analyn O.", username: "BDRFJ", password: "21282", pr: 98, pc: 99 },
  { name: "ALBA, Gillen C.", username: "LSPGZ", password: "69431", pr: 93, pc: 82 },
  { name: "ASALDO, Kate Crystal D.", username: "EGRVV", password: "42698", pr: 96, pc: 87 },
  { name: "ASNAN, Manilyn Mae A.", username: "BSBYR", password: "25296", pr: 96, pc: 89 },
  { name: "BALANAY, Lynette Vina", username: "SMBWL", password: "59368", pr: 96, pc: 89 },
  { name: "BARILLOS, Ianne Gail S.", username: "QUQAK", password: "60547", pr: 95, pc: 87 },
  { name: "DE GUZMAN, Arianne Joy c.", username: "SSMLY", password: "72551", pr: 96, pc: 91 },
  { name: "DE LEON, Patricia Mae B.", username: "OVJQF", password: "90981", pr: 94, pc: 85 },
  { name: "DOMINGO, Mischa Isabeli", username: "EUYQO", password: "16915", pr: 96, pc: 83 },
  { name: "FERNANDEZ, Lester Mae D.", username: "KBQBO", password: "97859", pr: 98, pc: 94 },
  { name: "HERNANDEZ, Jenny P.", username: "ABOFC", password: "32962", pr: 94, pc: 82 },
  { name: "IBANA, Jeanella Mae C.", username: "WVUOK", password: "99950", pr: 95, pc: 88 },
  { name: "JARDINERO, Juliana Shane A.", username: "TOYKE", password: "75705", pr: 95, pc: 83 },
  { name: "KALALO, Mariel Jea C.", username: "IWSBS", password: "82802", pr: 98, pc: 86 },
  { name: "MAPUSAO, Lucille Jean F.", username: "WUOQU", password: "62056", pr: 95, pc: 90 },
  { name: "OCAN, Maria Jodel A.", username: "UVJMS", password: "48635", pr: 97, pc: 95 },
  { name: "OCAN, Joelle Lei Cassandra V.", username: "NJECG", password: "15810", pr: 97, pc: 87 },
  { name: "ODOVER, Jeziel R.", username: "XIURN", password: "86744", pr: 97, pc: 94 },
  { name: "PORTADES, Leni Mae L.", username: "DHFLC", password: "86924", pr: 97, pc: 95 },
  { name: "RADA, Maricris B.", username: "VJGHS", password: "52377", pr: 98, pc: 98 },
  { name: "RAMIRO, Joreen V.", username: "GBEXU", password: "54917", pr: 96, pc: 85 },

  { name: "ABARCA,ONE ANTON CANONG", username: "PHAYD", password: "57959", pr: 94, pc: 82 },
  { name: "APPAD,JEANELLE HANS DE JESUS", username: "HDLUQ", password: "68663", pr: 94, pc: 82 },
  { name: "ARCEGA,ALEXIS XANDER JASO", username: "JITAE", password: "69754", pr: 96, pc: 87 },
  { name: "BOLAÑOS,SAMUEL -", username: "ABXPC", password: "27554", pr: 95, pc: 83 },
  { name: "CABARLE,CHARLES JOHN BUGAGAO", username: "LDXOK", password: "52928", pr: 97, pc: 94 },
  { name: "CAMU,CJ POLERO", username: "CSCOL", password: "90931", pr: 96, pc: 87 },
  { name: "CASIANO,AJVIEL FORMANES", username: "BEUTB", password: "18762", pr: 98, pc: 93 },
  { name: "COPE,EUGENE JAY QUIÑONES", username: "MMRSM", password: "46743", pr: 96, pc: 90 },
  { name: "DE LEON,CHRISRENZ BUGAGAO", username: "EFFYI", password: "99798", pr: 96, pc: 85 },
  { name: "DIME,CHARLIE SAAVEDRA", username: "GFWAX", password: "78075", pr: 96, pc: 84 },
  { name: "GUTIERREZ,RUBEN, III QUIÑONES", username: "TZRWS", password: "22185", pr: 96, pc: 96 },
  { name: "KANAZAWA,KIM CAPISTRANO", username: "JJMHX", password: "69039", pr: 94, pc: 86 },
  { name: "MAGAT,NICOLAS ISIP", username: "CFEOJ", password: "37114", pr: 97, pc: 87 },
  { name: "PEÑA,LORENZO CRIS YANTO", username: "MYPSC", password: "65178", pr: 95, pc: 90 },
  { name: "RICAFRENTE,JOHN CARL BRIAN SACRIZ", username: "ZBEQC", password: "83136", pr: 97, pc: 86 },
  { name: "SAN RAMON,EARON PONAYO", username: "GVNAC", password: "26597", pr: 94, pc: 85 },
  { name: "SAN RAMON,RALPH ANGEL ALFEREZ", username: "QZYKS", password: "64356", pr: 97, pc: 90 },
  { name: "TRABOCO,MARK JOSHUA VEGA", username: "KNIIK", password: "53486", pr: 98, pc: 92 },

  { name: "ARTIAGA,TIFFANY ASHLY LAVARRO", username: "VDJPZ", password: "36412", pr: 94, pc: 84 },
  { name: "CABARLE,NIÑA GIZEL ZAÑO", username: "ZAXGZ", password: "48740", pr: 97, pc: 98 },
  { name: "CACERES,LIZELLE ARCILLA", username: "MLASS", password: "95695", pr: 95, pc: 88 },
  { name: "CATUIRA,JOYCE MESA", username: "IDGMO", password: "35485", pr: 96, pc: 96 },
  { name: "GUTIERREZ,JETZY MAE MANLANGIT", username: "AITZI", password: "49761", pr: 96, pc: 86 },
  { name: "HEGINA,JONA MAY UBANA", username: "IIFFQ", password: "13488", pr: 96, pc: 88 },
  { name: "INOCENTES,CHARIEL CABANELA", username: "IFCZQ", password: "35840", pr: 98, pc: 90 },
  { name: "LLANETA,LEI-ANNE RIZ DELOS REYES", username: "TKXIX", password: "66608", pr: 98, pc: 93 },
  { name: "QUINTELA,IRISH NATHALIE SAN GABRIEL", username: "TKLSB", password: "22914", pr: 98, pc: 96 },
  { name: "QUINTELA,NICA SHEEN BERJA", username: "YZEGP", password: "95975", pr: 92, pc: 83 },
  { name: "SACRIZ,SUZAINE MARCAIDA", username: "QUREL", password: "47301", pr: 97, pc: 88 },
  { name: "SAN RAMON,HANNAH MAE ABIAR", username: "XOJUW", password: "87696", pr: 96, pc: 90 },
  { name: "URBAN,MARJORIE VELANTE", username: "ENPLA", password: "89004", pr: 96, pc: 87 }
];

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const student = students.find(s => s.username === username && s.password === password);

  if (student) {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("error").textContent = "";
    document.getElementById("gradeBox").style.display = "block";
    document.getElementById("studentName").textContent = student.name;
    document.getElementById("prGrade").textContent = student.pr;
    document.getElementById("pcGrade").textContent = student.pc;
  } else {
    document.getElementById("error").textContent = "Invalid username or password.";
  }
});

function logout() {
  document.getElementById("gradeBox").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}
