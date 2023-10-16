```python
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from models import EmailCampaign

def sendEmail(campaign_id):
    # Fetch campaign data from the database
    campaign = EmailCampaign.query.get(campaign_id)

    # Create a secure SSL context
    context = ssl.create_default_context()

    # Use smtplib to send the email
    with smtplib.SMTP_SSL("smtp.example.com", 465, context=context) as server:
        server.login("myusername", "mypassword")

        # Create a multipart message and set headers
        message = MIMEMultipart()
        message["From"] = "myemail@example.com"
        message["To"] = ", ".join(campaign.recipient_list)
        message["Subject"] = campaign.subject_line

        # Add body to email
        message.attach(MIMEText(campaign.email_content, "plain"))

        # Send the email
        server.send_message(message)

    print(f"Email campaign {campaign_id} sent successfully.")
```