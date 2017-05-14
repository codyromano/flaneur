import LocalDatabase from 'stores/LocalDatabase';
import RemoteDatabase from 'stores/RemoteDatabase';

export default function DatabaseFactory(params = {}) {
  const {isAuthenticated} = params;
  return isAuthenticated ? new RemoteDatabase() : new LocalDatabase();
}