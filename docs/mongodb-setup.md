# MongoDB Atlas Setup Guide

## Connection Method: Node.js Driver
This project uses the MongoDB Node.js driver, which is already configured in the codebase. The connection is managed through the files in `src/lib/db/`.

## Setting up MongoDB Atlas Free Tier (M0)

1. Create a MongoDB Atlas Account
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for a free account or log in

2. Create a Free Cluster
   - Click "Build a Database"
   - Choose "FREE" (M0 tier)
   - Select your preferred cloud provider and region
   - Choose a cluster name (e.g., "d4accountants-cluster")
   - Click "Create"

3. Configure Database Access
   - In the security menu, click "Database Access"
   - Add a new database user
   - Choose username/password authentication
   - Set a secure password
   - Set user privileges to "Read and Write to any database"

4. Configure Network Access
   - In the security menu, click "Network Access"
   - Click "Add IP Address"
   - For development, you can add your current IP or use "0.0.0.0/0" to allow access from anywhere
   - For production, make sure to restrict to specific IP addresses

5. Get Connection String
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string

6. Configure Environment Variables
   - Copy `.env.example` to `.env`
   - Replace the placeholder MongoDB URI with your connection string
   - Update username and password in the URI
   - Example:
     ```
     MONGODB_URI="mongodb+srv://your_username:your_password@your-cluster.mongodb.net/d4accountants"
     ```

7. Test Connection
   - Start your application
   - Verify that the database connection is successful
   - Check logs for any connection errors

## Security Best Practices

- Never commit `.env` file with real credentials
- Use strong passwords for database users
- Regularly rotate database credentials
- Restrict network access to known IP addresses in production
- Enable MongoDB Atlas backup for data protection

## Monitoring

- MongoDB Atlas provides free monitoring tools
- Monitor database performance in Atlas dashboard
- Set up alerts for critical metrics
- Review logs periodically for security events

## Support

For any issues with MongoDB Atlas setup:
- Check [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- Visit [MongoDB Community Forums](https://community.mongodb.com/)
- Contact MongoDB Support through Atlas dashboard