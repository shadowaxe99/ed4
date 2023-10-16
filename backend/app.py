```python
from flask import Flask, request, jsonify
from models import db, EmailCampaign
from email_service import sendEmail
from response_tracker import trackResponse
from performance_analyzer import analyzePerformance

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/email_marketing'
db.init_app(app)

@app.route('/create_campaign', methods=['POST'])
def createCampaign():
    data = request.get_json()
    new_campaign = EmailCampaign(data['subject'], data['content'], data['recipients'])
    db.session.add(new_campaign)
    db.session.commit()
    return jsonify({'message': 'Campaign created successfully'}), 201

@app.route('/send_email/<int:campaign_id>', methods=['POST'])
def sendEmailRoute(campaign_id):
    campaign = EmailCampaign.query.get(campaign_id)
    if not campaign:
        return jsonify({'message': 'Campaign not found'}), 404
    sendEmail(campaign)
    return jsonify({'message': 'Email sent successfully'}), 200

@app.route('/track_response/<int:campaign_id>', methods=['GET'])
def trackResponseRoute(campaign_id):
    campaign = EmailCampaign.query.get(campaign_id)
    if not campaign:
        return jsonify({'message': 'Campaign not found'}), 404
    responses = trackResponse(campaign)
    return jsonify({'responses': responses}), 200

@app.route('/analyze_performance/<int:campaign_id>', methods=['GET'])
def analyzePerformanceRoute(campaign_id):
    campaign = EmailCampaign.query.get(campaign_id)
    if not campaign:
        return jsonify({'message': 'Campaign not found'}), 404
    performance = analyzePerformance(campaign)
    return jsonify({'performance': performance}), 200

if __name__ == '__main__':
    app.run(debug=True)
```