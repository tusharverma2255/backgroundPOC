// import React, { useEffect } from 'react';
// import SQLite, { SQLiteDatabase, SQLError } from 'react-native-sqlite-storage';
// import BackgroundService from 'react-native-background-actions';

// const DataWriter = () => {
//   useEffect(() => {
//     const openDatabaseAndWriteData = async () => {
//       try {
//         const db: SQLiteDatabase = await SQLite.openDatabase({
//           name: 'test.db',
//           createFromLocation: 'default',
//         });

//         db.transaction((tx: any) => {
//           tx.executeSql(
//             'CREATE TABLE IF NOT EXISTS data (id INTEGER PRIMARY KEY AUTOINCREMENT, value TEXT)',
//             [],
//             () => {
//               console.log('Table created successfully');
//             },
//             (error: SQLError) => {
//               console.error('Error creating table:', error);
//             },
//           );

//           const writeData = async () => {
//             for (let i = 1; i <= 100000; i++) {
//               await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
//               tx.executeSql(
//                 'INSERT INTO data (value) VALUES (?)',
//                 [`Data ${i}`],
//                 () => {
//                   console.log(`Inserted data ${i} into database`);
//                 },
//               );
//             }
//           };

//           writeData(); // Start writing data
//         });
//       } catch (error) {
//         console.error('Error opening database:', error);
//       }
//     };

//     // Start background service to ensure data writing continues even when the app is killed
//     const options = {
//       taskName: 'DataWriterService',
//       taskTitle: 'Data Writer Service',
//       taskDesc: 'Service to continuously write data to database',
//       taskIcon: { name: 'ic_launcher', type: 'mipmap' }, // Provide a default task icon
//       color: '#ffffff', // Provide a default color
//       linkingURI: '', // Provide a default linking URI
//     //   progressBar: {}, // Provide a default progress bar
//     };

//     BackgroundService.start(openDatabaseAndWriteData, options);

//     // No cleanup function needed since background service continues running even when the component unmounts
//   }, []);

//   return null;
// };

// export default DataWriter;
