/**
 * @Description: G6 Node Style
 * @Author: Chris
 * @Date: 2024/6/12
 */
export const nodeTypeName = "rect-jsx";
export const nodeDefinition = (cfg) => `
    <group>
          <rect style={{ width: 150, height: 20, fill: #2196F3, radius: [6, 6, 0, 0] }}>
          <text style={{ marginTop: 2, marginLeft: 75, textAlign: 'center', fontWeight: 'bold', fill: '#fff' }}>${cfg.id}</text>
        </rect>
        <rect style={{ width: 150, height: 55, stroke: #2196F3, fill: #ffffff, radius: [0, 0, 6, 6] }}>
          <text style={{ marginTop: 2, marginLeft: 2, fontSize: 10, fill: '#333' }}>描述: ${cfg.label}</text>
        </rect>
    </group>
    `;