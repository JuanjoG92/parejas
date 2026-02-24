<?php
// Initialize SQLite database for FaithMeet
function getDB() {
    $dbPath = __DIR__ . '/../data/faithmeet.db';
    $isNew = !file_exists($dbPath);
    $db = new PDO('sqlite:' . $dbPath);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    if ($isNew) {
        $db->exec("
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL,
                age INTEGER,
                gender TEXT,
                country TEXT,
                denomination TEXT,
                bio TEXT DEFAULT '',
                looking_for TEXT DEFAULT '',
                photo TEXT DEFAULT '',
                token TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );
            CREATE TABLE IF NOT EXISTS likes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL,
                target_id INTEGER NOT NULL,
                action TEXT DEFAULT 'like',
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                UNIQUE(user_id, target_id)
            );
            CREATE TABLE IF NOT EXISTS matches (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user1_id INTEGER NOT NULL,
                user2_id INTEGER NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                UNIQUE(user1_id, user2_id)
            );
        ");
        // Seed demo profiles
        $hash = password_hash('demo123', PASSWORD_DEFAULT);
        $demos = [
            ['María','maria@demo.com',$hash,28,'female','Argentina','Evangélica','Amo a Dios, la música worship y los atardeceres. Busco alguien con quien crecer en la fe juntos.','Alguien que ame a Dios de corazón y busque una relación seria.','https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop'],
            ['Carlos','carlos@demo.com',$hash,31,'male','Colombia','Bautista','Líder de jóvenes en mi iglesia. Me gusta el café, la naturaleza y las buenas conversaciones.','Una mujer de fe, con valores y buen sentido del humor.','https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop'],
            ['Ana','ana@demo.com',$hash,26,'female','México','Católica','Maestra de escuela dominical. Me encanta cocinar, leer la Biblia y viajar.','Un hombre que ponga a Dios primero en todo.','https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop'],
            ['David','david@demo.com',$hash,29,'male','Chile','Pentecostal','Músico de alabanza. Toco guitarra y piano. Amo servir en la iglesia.','Alguien con quien compartir la vida y el ministerio.','https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop'],
            ['Lucía','lucia@demo.com',$hash,24,'female','España','Evangélica','Estudiante de teología. Me apasiona la misión y ayudar a otros.','Un compañero de vida y de fe.','https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop'],
            ['Pedro','pedro@demo.com',$hash,33,'male','Perú','Adventista','Médico y voluntario en misiones. Amo los deportes y la vida al aire libre.','Una mujer que ame al Señor y quiera servir juntos.','https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop'],
            ['Valentina','valentina@demo.com',$hash,27,'female','Venezuela','No denominacional','Diseñadora gráfica. Amo el arte, la naturaleza y los animales.','Alguien amable, fiel y con corazón para Dios.','https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop'],
            ['Mateo','mateo@demo.com',$hash,30,'male','Ecuador','Metodista','Ingeniero y líder de grupo pequeño. Me gusta leer, correr y la buena comida.','Una compañera que comparta mi fe y mis sueños.','https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop'],
            ['Sofía','sofia@demo.com',$hash,25,'female','Paraguay','Luterana','Cantante del coro de mi iglesia. Amo los niños y los perros.','Un hombre de oración, trabajador y cariñoso.','https://images.pexels.com/photos/1758845/pexels-photo-1758845.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop'],
            ['Daniel','daniel@demo.com',$hash,35,'male','Estados Unidos','Presbiteriana','Pastor juvenil. Me encanta enseñar la Biblia y jugar fútbol.','Una mujer con un corazón misionero y espíritu alegre.','https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop'],
        ];
        $stmt = $db->prepare("INSERT INTO users (name,email,password,age,gender,country,denomination,bio,looking_for,photo) VALUES (?,?,?,?,?,?,?,?,?,?)");
        foreach ($demos as $d) { $stmt->execute($d); }
    }
    return $db;
}
