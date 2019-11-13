import * as _ from '@antv/util';
import BasePlot, { PlotConfig } from '../../base/plot';
import TinyColumnLayer, { TinyColumnLayerConfig } from './layer';

export interface TinyColumnConfig extends TinyColumnLayerConfig, PlotConfig {}

export default class TinyColumn<T extends TinyColumnConfig = TinyColumnConfig> extends BasePlot<T> {
  public static getDefaultOptions: typeof TinyColumnLayer.getDefaultOptions = TinyColumnLayer.getDefaultOptions;

  public createLayers(props) {
    const layerProps = _.deepMix({}, props);
    layerProps.type = 'tinyColumn';
    super.createLayers(layerProps);
  }
}