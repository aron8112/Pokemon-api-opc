const app = require('./app.js');
const userRoutes = require('./src/users/routes.js');
const pokemonRoutes = require('./src/pokemon/routes.js');
const trainerRoutes = require('./src/trainer/routes.js');
const teamRoutes = require('./src/team/routes.js');
const swaggerDoc = require('./src/utils/documentation/swagger.js');

app.use('/users', userRoutes);
app.use('/pokemon', pokemonRoutes);
app.use('/trainer', trainerRoutes);
app.use('/team', teamRoutes);
app.use('/api-doc', swaggerDoc);

