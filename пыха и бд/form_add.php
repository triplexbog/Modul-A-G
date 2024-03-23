<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="CSS/style.css">
</head>
<body>
    <form action="add.php" method="POST">
        <fieldset class="form_add_fieldset">
            <legend>Добавление фото</legend>
            <p><Label>Введите модель: <em>*</em></Label>
            <input type="text" id="name"  name="name" required placeholder="Введите название модели" size=50></p>
            <p>
                <label for="company">Производитель</label>
                <input type="text" id="company" name="company" placeholder="Введите название компании" required>
            </p>
        
                <input type="submit" value="добавить " class="submit">
            
        </fieldset>
    </form>
</body>
</html>