from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/delivery')
def delivery():
    return render_template('delivery.html')

@app.route('/offset')
def offset():
    return render_template('offset.html')

@app.route('/digital')
def digital():
    return render_template('digital.html')

@app.route('/weekend')
def weekend():
    return render_template('weekend.html')

@app.route('/cheep')
def cheep():
    return render_template('cheep.html')

@app.route('/tags')
def tags():
    return render_template('labels.html')

@app.route('/badges')
def badges():
    return render_template('badges.html')

@app.route('/forms')
def forms():
    return render_template('forms.html')  # Бланки

@app.route('/Interior_printing')
def Interior_printing():
    return render_template('Interior printing.html')

@app.route('/Brochures')
def Brochures():
    return render_template('Brochures.html')

@app.route('/annual_reports')
def annual_reports():
    return render_template('annual reports.html')

@app.route('/newspapers')
def newspapers():
    return render_template('newspapers.html')

@app.route('/magazines')
def magazines():
    return render_template('magazines.html')

@app.route('/holographic_stickers')
def holographic_stickers():
    return render_template('holographic stickers.html')

@app.route('/magnetic_cards')
def magnetic_cards():
    return render_template('magnetic cards.html')

@app.route('/magnetic_souvenirs')
def magnetic_souvenirs():
    return render_template('magnetic souvenirs.html')

@app.route('/menu')
def menu():
    return render_template('menu.html')

@app.route('/labels')
def labels():
    return render_template('labels.html')

@app.route('/stickers')
def stickers():
    return render_template('stickers.html')

@app.route('/business_cards')
def business_cards():
    return render_template('business cards.html')

@app.route('/leaflets')
def leaflets():
    return render_template('leaflets.html')

@app.route('/notepads')
def notepads():
    return render_template('notepads.html')

@app.route('/flyers')
def flyers():
    return render_template('flyers.html')

@app.route('/booklet')
def booklet():
    return render_template('booklet.html')

@app.route('/presentations')
def presentations():
    return render_template('presentations.html')

@app.route('/calendars')
def calendars():
    return render_template('calendars.html')

@app.route('/postcards')
def postcards():
    return render_template('postcards.html')

@app.route('/wedding')
def wedding():
    return render_template('forms.html')  # Печать пригласительных на свадьбу (если forms.html)

@app.route('/elevators')
def elevators():
    return render_template('elevators.html')  # Лифлеты

@app.route('/kubariki')
def kubariki():
    return render_template('kubariki.html')

@app.route('/A4')
def A4():
    return render_template('A4.html')

@app.route('/double_sided_stickers')
def double_sided_stickers():
    return render_template('double sided stickers.html')

@app.route('/signs')
def signs():
    return render_template('signs.html')

@app.route('/banners')
def banners():
    return render_template('banners.html')

@app.route('/payment')
def payment():
    return render_template('payment.html')

@app.route('/photogallery')
def photogallery():
    return render_template('photogallery.html')

@app.route('/contacts')
def contacts():
    return render_template('contacts.html')

if __name__ == '__main__':
    app.run(debug=True)

